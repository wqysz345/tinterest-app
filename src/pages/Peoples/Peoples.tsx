import {HeaderOrganism} from "../../components/organisms/Header";
import {LeftAsideOrganism} from "../../components/organisms/Aside/LeftAside";
import {RightAsideOrganism} from "../../components/organisms/Aside/RightAside";

import {faker} from "@faker-js/faker";
import IUser from "../../types";
import {PeopleCard} from "../../components/organisms/PeopleCard";

export default function Peoples() {

    const peoples: IUser[] = [];

    for (let i = 0; i < 10; i++) {
        const user: IUser = {
            thumbnail: faker.image.url(),
            name: faker.person.firstName() + ' ' + faker.person.lastName(),
            short_url: '@' + faker.person.firstName().toLowerCase(),
            followers: faker.number.int(100),
            following: faker.number.int(100),
            avatar: faker.image.avatar()
        }
        peoples.push(user);
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
                        {peoples.map((user, index) => (
                            <PeopleCard key={index} user={user}/>
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