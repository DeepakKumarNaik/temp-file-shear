/* eslint-disable class-methods-use-this */
const users = [
    {
        id: 1,
       /* firstName: 'Subhasmita',
        lastName: 'Khamari', */
        name:'HTML',
        active: true,
        email: 'khamarisubhasmita9@gmail.com'
    },
    {
        id: 2,
       /* firstName: 'Akankshya',
        lastName: 'Behera', */
        name:'CSS',
        active: true,
        email: 'akankshya.b0009@gmail.com'
    },
    {
        id: 3,
       /* firstName: 'Suman',
        lastName: 'Patra', */
        name:'JS',
        active: true,
        email: 'sumanpatra688@gmail.com'
    },
    {
        id: 4,
       /* firstName: 'Deepak',
        lastName: 'Naik', */
        name:'ReactJS',
        active: true,
        email: '0001d1001d1001d1000@gmail.com'
    },
    {
        id: 5,
       /* firstName: 'Tukuna',
        lastName: 'Patro', */
        name:'NodeJS',
        active: true,
        email: 'tukuna.patro@gmail.com'
    },
    {
        id: 6,
       /* firstName: 'Swati',
        lastName: 'Sucharita', */
        name:'MongoDB',
        active: false,
        email: 'swatisucharita94@gmail.com'
    }
];

// CRUD
// View : GET /users
// view one user : GET /user/:id
// Add : POST /user
// Delete : DELETE /user/:id
// Update : PUT/PATCH /user/:id

class UserUtil {
    getUsers() {
        return users;
    }

    getUser(id) {
        const user = users.find((u) => {
            return u.id === parseInt(id, 10);
        });

        return user || {};
    }

    addUser(user) {
        users.push({ ...user, id: users.length + 1 });
        return user;
    }

    updateUser(id, updates) {
        const index = users.findIndex((u, i) => {
            return u.id === parseInt(id, 10);
        });
        const oldUser = users[index];
        users[index] = { ...oldUser, ...updates };
        return users[index];
    }

    deleteUser(id) {
        const index = users.findIndex((u, i) => {
            return u.id === parseInt(id, 10);
        });
        users.splice(index, 1);
    }
}

module.exports = new UserUtil();
