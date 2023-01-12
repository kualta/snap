import React, { useId, useState } from "react";
import { SocialProfile } from "./social/SocialProfile";

export class User {
    name: string
    id: string
    created_at: string
    connections: string[]
    socials: SocialProfile[]

    constructor(id: string) {
        this.name = 'User ' + id
        this.id = id
        this.created_at = 'TODO Creation Date'
        this.connections = []
        this.socials = []
    }

    add_profile = (profile: SocialProfile): void => {
        this.socials.push(profile)
    }
}

const UserComponent = (user: User): JSX.Element => {
    return <div className="card w-96 bg-base-100 rounded-xl">
        <div className="card-title px-10 pt-10">
            <h1 className="px-7">{user.name}</h1>
        </div>
        <div className="card-body text-right">
            <table>
                <tbody>
                    <tr>
                        <th>id:</th>
                        <td>{user.id}</td>
                    </tr>
                    <tr>
                        <th>created:</th>
                        <td>{user.created_at}</td>
                    </tr>
                    <tr>
                        <th>connections:</th>
                        <td>{user.connections.length}</td>
                    </tr>
                    <tr>
                        <th>socials:</th>
                        <td>{user.socials.length}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default function UserProfile(user: User) {
    let [currentProfile, setCurrentProfile] = useState(UserComponent(user))

    // TODO: setCurrentProifle

    return (
        <div className="card bg-base-100 shadow-xl rounded-xl">
            <div className="tabs">
                <a className="tab tab-lifted tab-active">General</a>
                <a className="tab tab-lifted">Twitter</a>
                <a className="tab tab-lifted">Mastodon</a>
                <a className="tab tab-lifted">Discord</a>
            </div>
            <div className="card-body px-10 pt-10">
                {currentProfile}
            </div>
        </div>
    )
} 