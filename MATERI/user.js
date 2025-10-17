class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo(){
        return `${this.name} (${this.email})`;
    }
}

//mengekspor class User sebagai ekspor default
export default user;