import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// const APIkey = 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

const userMarker = customMap.addMarker(user);
customMap.addMarker(company);
