import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { UserModel } from '../../admin/models/user.model';
import { RecipeKinveyModel } from '../../recipe/models/recipe-kinvey.model';

@Injectable()
export class AdminService extends BaseService {
    constructor(protected http: HttpClient) {
        super(http)
    }

    public getAllUsers() {
        const getAllUsersUrl = this.constructRequestUrl('user', '');
        return this.http.get<UserModel[]>(getAllUsersUrl);
    }

    public approveRecipe(recipe: RecipeKinveyModel) {
        const approveRecipeUrl = this.constructRequestUrl('appdata', 'recipes' + "/" + recipe._id);
        const data = Object.assign({}, recipe, { isApproved: true});
        return this.http.put<RecipeKinveyModel>(approveRecipeUrl, data);
    }

    public lockUser(userId: string){
        const data = {
            userId: userId,
            setLockdownStateTo: true
        }; 

        return this.manageUser(data);
    }

    public unlockUser(userId: string){
        const data = {
            userId: userId,
            setLockdownStateTo: false
        };
        
        return this.manageUser(data);
    }

    private manageUser(userData: { userId: string, setLockdownStateTo: boolean }){
        const manageUserUrl = this.constructRequestUrl('rpc', 'lockdown-user');
        return this.http.post(manageUserUrl, JSON.stringify(userData));
    }
}