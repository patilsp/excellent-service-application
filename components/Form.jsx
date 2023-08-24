import Link from "next/link";

import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { Input } from "@/registry/new-york/ui/input"
import { Textarea } from "@/registry/new-york/ui/textarea"
import { Label } from "@/registry/new-york/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/new-york/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { motion } from "framer-motion";


const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='flex-center mb-5 w-full max-w-full flex-col py-4'>
      <h1 className='head_text text-center'>
        <span className='fs-36 green_gradient'>{type} Customer</span>
      </h1>
      
      <form
        onSubmit={handleSubmit}
        className='glassmorphism mt-10 flex w-full max-w-2xl flex-col gap-7'
      >

  <Card>
      <CardHeader>
        <CardTitle>Add Customer</CardTitle>
        <CardDescription>
          Add a new Customer details.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 p-5">
      
          <div className="grid gap-2">
            <Label htmlFor="name">First Name</Label>
            <Input id="firstname" placeholder="First Name" value={post.firstname}
              onChange={(e) => setPost({ ...post, firstname: e.target.value })} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Last Name</Label>
            <Input id="lastname" placeholder="Last Name" value={post.lastname}
              onChange={(e) => setPost({ ...post, lastname: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email </Label>
            <Input id="email" placeholder="Email" value={post.email}
              onChange={(e) => setPost({ ...post, email: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Date Of Birth </Label>
            <Input id="dateofbirth" placeholder="Date Of Birth" value={post.dateofbirth}
              onChange={(e) => setPost({ ...post, dateofbirth: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Address </Label>
            <Textarea
              value={post.address}
              onChange={(e) => setPost({ ...post, address: e.target.value })}
              placeholder='Write your address here'
              required
              className='border'
            />
          
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phoneno">Phone Number</Label>
            <Input id="phoneno" placeholder="Phone Number" value={post.phoneno}
              onChange={(e) => setPost({ ...post, phoneno: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="city" value={post.city}
              onChange={(e) => setPost({ ...post, city: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="state" value={post.state}
              onChange={(e) => setPost({ ...post, state: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pincode">Pin Code</Label>
            <Input id="pincode" placeholder="Pin Code" value={post.pincode}
              onChange={(e) => setPost({ ...post, pincode: e.target.value })}/>
          </div>

          
      
      <Label htmlFor="tag"><span className='text-base font-semibold text-gray-700'>
            Customer Tag{" "}
            <span className='font-normal'>
              (#active, #inactive, etc.)
            </span>
          </span></Label>
          
          <Input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input border'
          />
 
  
      </CardContent>


        
      <CardFooter className="flex-end flex">
        {/* <Button className="w-full">Continue</Button> */}
        <motion.div // Animate the buttons as well
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-end flex w-full gap-2"
        >
          <Link href='/' className='text-sm text-gray-500'>
            Cancel
          </Link>
          <Button
            type='submit'
            disabled={submitting}
            className='rounded-full bg-primary px-5 py-4 text-sm'
          >
            {submitting ? `${type}ing...` : type}
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
      </form>
    </section>
  );
};

export default Form;
