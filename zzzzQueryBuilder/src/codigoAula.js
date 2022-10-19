//const agendas = await knex("agenda").debug();
//const agendas = await knex.raw("select * from agenda").debug(); //para contruir a query na mão
//const agendas = await knex("agenda").where("id", 5).debug(); //id = 5
//const agendas = await knex("agenda").where("id", "!=", 5).debug(); // id != 5
//const agendas = await knex("agenda").where({ id: 5 }).debug(); // id=5
//const agendas = await knex("agenda").where({ id: 5, nome: "alguma coisa" }).debug(); // id=5
//const agendas = await knex("agenda").where("id", "!=", 5).first().debug(); //pega o primeiro registro
/*const agendas = await knex("agenda")
    .where("id", 5)
    .select("id", "nome")
    .debug(); // id != 5 //FIltra escolhendo os campos de retorno*/
// const agendas = await knex("agenda").where("id", "!=", 5).debug(); // id != 5
//where null and not null
//const agendas = await knex("agenda").whereNull("email").debug();
//const agendas = await knex("agenda").whereNotNull("email").debug();

//WHERE BETWEEN
//const agendas = await knex("agenda").whereBetween("id", [5, 10]).debug();

//order by id
/*const agendas = await knex("agenda")
    .whereBetween("id", [5, 10])
    .orderBy("id", "desc")
    .debug();*/

//retorna registros unicos
//  const agendas = await knex("agenda").distinct("email").debug();

//group by e count
/*const agendas = await knex("agenda")
    .select("email")
    .groupBy("email")
    .count()
    .debug();*/

//limit and offset
//const agendas = await knex("agenda").offset(8).limit(5).debug();

//count
//const agendas = await knex("agenda").whereNull("email").count();
//sum
//const agendas = await knex("agenda").whereNull("email").sum("id");

//avg -> Retorna a média
//const agendas = await knex("agenda").whereNull("email").avg("id");

//Min -> menor valor
//  const agendas = await knex("agenda").whereNull("email").min("id");

//max Retorna o maior valor
//const agendas = await knex("agenda").whereNull("email").max("id");

/*
//1 Quantidade de medicamentos da tabela farmacia
  const medicamentos = await knex("farmacia").count().debug();

  //2Retornar apenas a idade do usuario mais novo cadastrado na tabela usuarios
  const maisNovo = await knex("usuarios")
    .select("idade")
    .orderBy("idade", "ASC")
    .first();

  // Faça uma query que retorna todas as categorias não nulas e a soma dos estoques de todos os medicamentos de cada categoria da tabela farmacia
  const somaMedicamentos = await knex("farmacia")
    .select("categoria")
    .sum("estoque")
    .whereNotNull("categoria")
    .groupBy("categoria")
    .debug();

  const somaCategoria = await knex("farmacia").whereNull("categoria").count();

  const produtosComCategorias = await knex("farmacia")
    .select("categoria", "estoque")
    .whereNotNull("categoria");

  const usuariosMaiores = await knex("usuarios")
    .select("idade")
    .where("idade", ">=", "18")
    .groupBy("idade")
    .count("idade")
    .orderBy("idade", "asc");*/
