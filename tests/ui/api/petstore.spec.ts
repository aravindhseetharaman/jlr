import { test, expect } from '@playwright/test';

test('01-GET pet by ID', async ({ request }) => {
  const response = await request.get('https://petstore.swagger.io/v2/pet/1');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
});

test('02-POST create a new pet', async ({ request }) => {
  const newPet = {
    id: 999,
    name: 'AravindhDog',
    status: 'available'
  };

  const response = await request.post('https://petstore.swagger.io/v2/pet', {
    data: newPet
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.name).toBe('AravindhDog');
});

test('03-PUT update pet', async ({ request }) => {
  const updatedPet = {
    id: 999,
    name: 'AravindhDogUpdated',
    status: 'sold'
  };

  const response = await request.put('https://petstore.swagger.io/v2/pet', {
    data: updatedPet
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.status).toBe('sold');
});

test('DELETE pet', async ({ request }) => {
  const response = await request.delete('https://petstore.swagger.io/v2/pet/999');
  expect(response.status()).toBe(200);
});

