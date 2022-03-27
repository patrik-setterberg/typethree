'use strict';

/**
 * test-result service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-result.test-result');
