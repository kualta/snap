import { SocialProfile } from "./SocialProfile";

export class User {
    constructor(name: string) {
        this.name = name
        this.id = '0' // TODO: uid initialization
        this.connections = []
        this.profiles = []
    }
    name: string
    id: string
    connections: string[]
    profiles: SocialProfile[]
}

export default function UserProfile(user: User) {
    let profile = user.profiles.at(0)?.render()
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
                <div className="tabs">
                    <a className="tab tab-lifted tab-active">Twitter</a>
                    <a className="tab tab-lifted">Mastodon</a>
                    <a className="tab tab-lifted">Discord</a>
                </div>
                <div className="card-title px-10 pt-10">
                    <h1>title</h1>
                </div>
                <div className="card-body px-10 pt-10">
                    {profile}
                </div>
            </div>

        </>
    )
} 