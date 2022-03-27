'use strict';

/**
 * test-result router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-result.test-result');
