export interface SocialProfile {
    render(): JSX.Element
    fetch?(): Promise<SocialProfile>
}