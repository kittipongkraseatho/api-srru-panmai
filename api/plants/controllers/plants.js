'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async dashboard(ctx) {
    let s_date1 = ctx.request.body.s_date1;
    let e_date1 = ctx.request.body.e_date1;

    let s_date2 = ctx.request.body.s_date2;
    let e_date2 = ctx.request.body.e_date2;

    let s_date3 = ctx.request.body.s_date3;
    let e_date3 = ctx.request.body.e_date3;

    let s_date4 = ctx.request.body.s_date4;
    let e_date4 = ctx.request.body.e_date4;

    let month1 =  strapi.query('plants').count({
      created_at_gte: s_date1,
      created_at_lte: e_date1,
    });

    let month2 =  strapi.query('plants').count({
      created_at_gte: s_date2,
      created_at_lte: e_date2,
    });
    let month3 =  strapi.query('plants').count({
      created_at_gte: s_date3,
      created_at_lte: e_date3,
    });
    let month4 =  strapi.query('plants').count({
      created_at_gte: s_date4,
      created_at_lte: e_date4,
    });
    let value = null;
    let values = await Promise.all([month4, month3, month2, month1]);

      return values
  }
};
