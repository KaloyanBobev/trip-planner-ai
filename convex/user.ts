import { mutation } from "./_generated/server";

import { v } from "convex/values";

export const CraeteNewUser = mutation({
    
    args:{  
        name:v.string(),
        email:v.string(),
        imageUrl:v.string(),
    },
    handler:async(ctx,agrs) =>{
        //If user already exist do not create new user
        const user = await ctx.db.query('UserTable').filter((q)=>q.eq(q.field('email'),agrs.email)).collect();
        if (user?.length == 0) {
            const userData = {
                name: agrs.name,
                email: agrs.email,
                imageUrl: agrs.imageUrl,
            }
            //if not exist create new user 
            const result=await ctx.db.insert('UserTable',userData);
            return userData
        }

        return user[0];
    }

    
})