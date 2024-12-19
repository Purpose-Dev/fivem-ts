import { deleteDirectories, deleteDirectory } from './utils';

void deleteDirectories('packages', '.turbo');
void deleteDirectory('.turbo');
