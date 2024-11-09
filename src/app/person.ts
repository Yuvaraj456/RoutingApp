export class Person {


     personId?: number;      
     personName?:string;
     skills?: Skill[];
}

export class Skill {

    skillId?:number;

    skillName?:string;

    skillLevel?:string;

    personId?: number;      
}


