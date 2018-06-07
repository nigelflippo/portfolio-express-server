exports.seed = (knex, Promise) => {
  return knex('comments').insert([
    {
      id: 1,
      name: 'Jenny',
      company: 'Cactus',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      project_id: 1
    },
    {
      id: 2,
      name: 'Nigel',
      company: 'Freelance Software Developer',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      project_id: 2
    },
    {
      id: 3,
      name: 'Ella',
      company: 'Crazy Puppy Inc',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      project_id: 1
    },
    {
      id: 4,
      name: 'Osiris',
      company: 'Young Kitties LLC',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      project_id: 2
    }
  ]).then(() => {
    return knex.raw(`
      SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments))
    `)
  })
}
