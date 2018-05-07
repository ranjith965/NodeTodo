var configValues = require('./config');

module.exports = {

     getDBConnectionString: function(){
         return 'mongodb://' + configValues.uname + ':' + configValues.pwd 
                + '@ds217310.mlab.com:17310/nodetodo';
     }

}