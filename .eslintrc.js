// Path: /.eslintrc.js

module.exports = {
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],    
    'implicit-arrow-linebreak': 'off',    
    'comma-dangle': 'off',    
    indent: 'off',    
    'no-trailing-spaces': 'off',
    'no-console': 0
    // You can override any rules you want
  },
  env: 
  {    
      node: true,    
      es6: true,    
      browser: true
  },  
  
};
