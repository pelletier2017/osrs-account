export function add(a: number, b: number) {
    return a + b;
}

export class OsrsAccountBuilder {
    name: string | undefined;
    skills: any;
    quests: any;

    // constructor(name: any, skills: any, quests: any) {
    //     this.name = name
    //     this.skills = skills
    //     this.quests = quests
    // }

    withName(name: string): OsrsAccountBuilder {
        this.name = name;
        return this;
    }

    withSkills(skills: any): OsrsAccountBuilder {
        this.skills = skills;
        return this;
    }

    withQuests(quests: any): OsrsAccountBuilder {
        this.quests = quests;
        return this;
    }

    validateSkills(): void {

    }

    validateQuests(): void {

    }

    build(): OsrsAccount {
        this.validateSkills();
        this.validateQuests();

        return new OsrsAccount(this.name, this.skills, this.quests);
    }
}

class OsrsAccount {
    name: string | undefined;
    skills: any;
    quests: any;

    constructor(name: any, skills: any, quests: any) {
        this.name = name
        this.skills = skills
        this.quests = quests
    }
}