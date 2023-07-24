"use client"

import Link from 'next/link'
import React from 'react'

import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"

import { api } from "../../utils/api"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form"
import { Textarea } from 'components/ui/textarea'

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title must be have at least one character..."
  })
})

const descriptionSchema = z.object({
  desc: z.string().min(1, {
    message: "Description must be have at least one character..."
  })
})

const recipeDetailSchema = z.object({
  recipe: z.string().min(1, {
    message: "Details must be have at least one character..."
  })
})


export default function New() {

  const createRecipe = api.recipe.createRecipe.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })
  const description = useForm<z.infer<typeof descriptionSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      desc: "",
    },
  })
  const detail = useForm<z.infer<typeof recipeDetailSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipe: "",
    },
  })

  function onSubmit(e: any) {
    createRecipe.mutate({
      title: "",
      description: "",
      detail: "",
    })
    console.log("You submited")
  }

  return (
    <div>
      <h1>Hello new recipe</h1>

      <Link href='/recipes'>
        <h1>Back to recipes</h1>
      </Link>
      <Link href='/'>
        <h1>Back to Home</h1>
      </Link>

      <div className=' flex justify-center w-2/3'>

        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (

                <FormItem>
                  <FormLabel className='text-3xl'>Your Recipe Name</FormLabel>

                  <FormControl>
                    <Input placeholder="Recipe Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={description.control}
              name="desc"
              render={({ field }) => (

                <FormItem>

                  <FormControl>
                    <Input placeholder="Short Description of your recipe..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>

              )}
            />

            <FormField
              control={detail.control}
              name="recipe"
              render={({ field }) => (

                <FormItem>

                  <FormControl>
                    <Textarea placeholder="Detail" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>

              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>

      </div>
    </div>
  )
}
