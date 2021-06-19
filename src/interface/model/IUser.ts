import IProjectRole from "../IProjectRole";

export default interface IUser {
	allProjects :boolean
	resources :Array<EnumResources>
	username :string
	email :string //@TODO criar um tipo email que ja valida
	password? :string
	name :string
	observation :string
	role :string //@TODO passar a usar id do mongo
	projects :Array<IProjectRole>
	createdAt :Date
	updatedAt :Date
	locale :string //@TODO criar um enum pra isso
	id :string
}