"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "@/registry/new-york/ui/button";
import { Input } from "@/registry/new-york/ui/input";
import { Label } from "@/registry/new-york/ui/label";
import { Textarea } from "@/registry/new-york/ui/textarea";

const ProductForm = ({ type, product, setProduct, submitting, handleSubmit }) => {
  return (
    <section className=" flex w-full justify-center">
      <div className="container-fluid flex items-center justify-center p-2 lg:p-8">
      
      <div className="w-full max-w-md rounded-lg border shadow-lg">
        <div className="p-4">
         <h1 className='head_text text-center'>
          <span className='fs-36 green_gradient'>{type} Product</span>
        </h1>
        <p className='desc max-w-md text-center'>
          {type} and update product here
        </p>
     </div>
      <motion.form
        onSubmit={handleSubmit}
        className='glassmorphism mt-10 flex w-full  flex-col gap-7 rounded-lg p-6 shadow-md'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-4">
          <Label htmlFor="name">Name</Label>
          <Input
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            placeholder='Enter product Name'
            required
            className='input'
          />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="description">Description</Label>
          <Textarea
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            placeholder='Enter product description'
            required
            className='form_textarea'
          />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="price">Price</Label>
          <Input
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            placeholder='Enter product price'
            required
            type='number'
            step='0.01'
            className='input'
          />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="model">Model</Label>
          <Input
            value={product.model}
            onChange={(e) => setProduct({ ...product, model: e.target.value })}
            placeholder='Enter product model'
            required
            className='input'
          />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="capacity">Capacity</Label>
          <Input
            value={product.capacity}
            onChange={(e) => setProduct({ ...product, capacity: e.target.value })}
            placeholder='Enter product capacity'
            required
            className='input'
          />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="technology">Technology</Label>
          <Input
            value={product.technology}
            onChange={(e) => setProduct({ ...product, technology: e.target.value })}
            placeholder='Enter product technology'
            required
            className='input'
          />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="warranty">Warranty</Label>
          <Input
            value={product.warranty}
            onChange={(e) => setProduct({ ...product, warranty: e.target.value })}
            placeholder='Enter product warranty'
            required
            className='input'
          />
        </div>

        <div className='mt-6 flex justify-end gap-4'>
          <Link href='/products' className='text-sm text-gray-500'>
            Cancel
          </Link>

          <Button
            type='submit'
            disabled={submitting}
            className='rounded bg-primary px-5 py-2 text-sm text-white'
          >
            {submitting ? `${type}ing...` : type}
          </Button>
        </div>
      </motion.form>
      </div>
      </div>
    </section>
  );
};

export default ProductForm;
