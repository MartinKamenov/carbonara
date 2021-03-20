import * as development from './dev';
import * as production from './prod';

const environments = {
    production,
    development,
    test: development
};

const environment = process.env.NODE_ENV || 'development';

export {default as countries} from './countries';
export default environments[environment];
