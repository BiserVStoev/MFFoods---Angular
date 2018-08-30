export interface RecipeKinveyModel {
    title: string,
    picture: string,
    description: string,
    servings: number,
    carbs: number,
    fat: number,
    protein: number,
    instructions: string
    ingredients: string
    isApproved: boolean
    publisher: string,
    _id?: string,
    _kmd?: { ect: string}
}