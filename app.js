const express       = require('express');
const exphbs        = require('express-handlebars');
const app           = express();
const path          = require('path');
const sequelize     = require('./db/connection');
const Job           = require('./models/Job');
const bodyParser    = require('body-parser');
const Sequelize     = require('sequelize');
const Op            = Sequelize.Op;


const PORT = 3000;


app.listen(PORT, function(){
    console.log(`O Express esta rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({extended: false }));

// handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: "main"}));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// db connection
sequelize.authenticate()
    .then(() => {
        console.log('Conexão bem-sucedida com o banco de dados!');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

    sequelize.sync({ force: false }) // Use `force: true` para recriar a tabela
    .then(() => {
        console.log('Modelo sincronizado com o banco de dados.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o modelo:', err);
    });



// routes
app.get('/', (req, res) =>{

    let search = req.query.job;
    let query = '%'+search+'%';

    if(!search){
        Job.findAll({order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs
            });
        })
        .catch(err => console.log(err));
    } else {
        Job.findAll({
            where: {title: {[Op.like]: query}},
            order: [
                ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs, search
            });
        }) 
        .catch(err => console.log(err));
    }

    
    
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));

app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
