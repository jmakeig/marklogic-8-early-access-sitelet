var amp = require("amp");

// The calling module does not need to know that an 
// imported function is amped. This is controlled by 
// the combination of configuration and the library 
// module's export declaration.
amp.evalVersion();
