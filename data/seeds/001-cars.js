
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '1J4FY19S5WP773358', make: 'Jeep', model: 'Wrangler', mileage: '188258', transmission: 'automatic', titlestatus: 'salvage'},
        {vin: 'JTHDU46FX85001694', make: 'Lexus', model: 'LS 600h', mileage: '117500', transmission: 'cvt', titlestatus: 'clean'},
        {vin: '1GCHSBEA8G1376184', make: 'Chevrolet', model: 'Colorado', mileage: '49760', transmission: 'automatic', titlestatus: 'clean'}
      ]);
    });
};
