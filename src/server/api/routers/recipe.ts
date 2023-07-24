import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const recipeRouter = createTRPCRouter({
  getRecipes: publicProcedure
    .input(z.object({ text: z.string().min(1) }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
    
  getAllRecipe: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.recipe.findMany();
  }),
  
  createRecipe: publicProcedure
  .input(z.object({ 
    title: z.string().min(1).max(150),
    description: z.string().min(1).max(150),
    detail: z.string().min(1).max(500)
  }))
  .mutation( async ({ input , ctx }) => {
    return await ctx.prisma.recipe.create({
      data: {
        title: input.title,
        description: input.description,
        detail: input.detail,
      }
    })
  })
});
