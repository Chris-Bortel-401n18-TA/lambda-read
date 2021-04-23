'use strict';

const peopleModel = require('./schema.js');

exports.handler = async (event) => {

  console.log(event);

  try {
  // Get one by id ...
  // const list = peopleModel.query()

    const list = await peopleModel.scan().exec();
    const data = JSON.stringify(list);

    return {
      statusCode: 200,
      body: data,
    }
    
  } catch(e) {
    return {
      statusCode: 500,
      body: e.message,
    }
  }
}
