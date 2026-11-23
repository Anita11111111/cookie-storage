import { expect, request } from '@playwright/test';
import { test as pagesTest } from './pages-Fixtures';

type MyFixtures = {
  token: string;
};


const test = pagesTest.extend<MyFixtures>({


})

export { test, expect };