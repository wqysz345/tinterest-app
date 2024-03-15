import {HeaderOrganism} from "../../components/organisms/Header";
import {LeftAsideOrganism} from "../../components/organisms/Aside/LeftAside";
import {RightAsideOrganism} from "../../components/organisms/Aside/RightAside";

import {faker} from "@faker-js/faker";
import {ITeam} from "../../types";
import {TeamCard} from "../../components/organisms/TeamCard";

export default function Teams() {

    const teams: ITeam[] = [];

    for (let i = 0; i < 10; i++) {
        const team: ITeam = {
            name: faker.company.name(),
            description: faker.lorem.sentence(30),
            members: faker.number.int(100)
        }

        teams.push(team);
    }

    return (
        <>
            <HeaderOrganism/>

            <div className="grid grid-cols-12 max-w-screen-xl mx-auto">
                <div className="col-span-3">
                    <LeftAsideOrganism />
                </div>
                <div className="col-span-6 max-w-xl place-self-center flex flex-col space-y-5">
                    <div className="w-full flex flex-col space-y-8">
                        {teams.map((team, index) => (
                            <TeamCard key={index} team={team}/>
                        ))}
                    </div>
                </div>
                <div className="col-span-3">
                    <RightAsideOrganism />
                </div>
            </div>
        </>
    )
}