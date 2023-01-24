/*
Created by Franz Zemen 01/23/2023
License Type: 
*/

import {rm} from 'node:fs/promises';
import {join} from 'node:path';
import {cwd} from 'node:process';

const promises : Promise<any>[] = [];
promises.push(rm(join(cwd(), './collocated/transient'), {force: true, recursive: true}));
promises.push(rm(join(cwd(), './commingled/transient'), {force: true, recursive: true}));
Promise.allSettled(promises)
  .then(statuses => {
    statuses.forEach(error => error.status === 'rejected' ? console.log(`Error - ${error.reason}`) : '');
    console.log('cleaned');
  })
