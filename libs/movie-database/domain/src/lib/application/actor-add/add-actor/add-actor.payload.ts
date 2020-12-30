export class AddActorPayload {
  constructor(
    public name: string,
    public surname: string,
    public thumbnailUrl: string,
    public biography: string
  ) {}
}
