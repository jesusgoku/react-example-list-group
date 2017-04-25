export default class Schedules {
  constructor(base_url) {
    this.base_url = base_url
  }

  getList() {
    return new Promise((resolve, reject) => {
      fetch(this.base_url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
      ;
    });
  }

  getItem(id) {
    return new Promise((resolve, reject) => {
      fetch(this.base_url + '/' + id)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
      ;
    });
  }

  updateItem(id, data) {
    return fetch(this.base_url + '/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
}
