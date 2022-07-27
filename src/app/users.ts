export class USER{
    id: number;
    name: string;
    dob: string;
    gender: string;
    qualification: string;
    email: string;
    skills: string;

    constructor(id, name, dob, gender, qualification, email, skills){
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.qualification = qualification;
        this.email = email;
        this.skills = skills;
    }
}