import Ember from 'ember';

export default Ember.Controller.extend({
  addParking(attrs) {
    const parking = {
      street: attrs.street,
      city: attrs.city,
      state: attrs.state,
    };

    fetch(`http://58abc252.ngrok.io/add-parking`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(parking),
    })
    .then(() => {
      this.transitionToRoute(`main`);
    });
  },
});
