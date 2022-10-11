import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Rox from "rox-browser"
import { event } from "../../../lib/gtm"

const OldRegistrationForm = () => {
  const [page, setPage] = useState(0)

  return (
    <main className="border-t-8 border-blue-500">
      <div className="container mx-auto py-8">
        <div className="flex">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
              <text y="32" fontSize="32">
                🐝
              </text>
            </svg>
          </Link>
          <button
            onClick={() => {
              Rox.showOverrides()
            }}
            type="button"
            className="ml-4 px-3 py-1 bg-blue-600 rounded-md text-white hover:bg-blue-700"
          >
            DEV
          </button>
        </div>
        {page === 0 && <Form onSubmit={() => setPage(1)} />}
        {page === 1 && <Quotes />}
      </div>
    </main>
  )
}

export default OldRegistrationForm

const Form = ({ onSubmit }: { onSubmit: Function }) => {
  return (
    <div className="border-2 border-gray-200 p-4 mt-8">
      <h1 className="text-4xl mt-4">Get your quote in minutes</h1>
      <img
        src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
        alt="Family"
        className="w-[40rem] border-8 border-blue-500 my-8"
      />
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault()
          onSubmit()
        }}
      >
        <div className="space-x-2">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />
        </div>
        <div className="space-x-2">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
        <div className="space-x-2">
          <label htmlFor="DoB">Date of Birth</label>
          <input type="date" id="DoB" />
        </div>
        <div className="space-x-2">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="space-x-2">
          <label htmlFor="sex">Sex</label>
          <select id="sex">
            <option value="">----</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-x-2">
          <label htmlFor="zip">Zip code</label>
          <input id="zip" name="zip" type="text" pattern="[0-9]*" />
        </div>
        <div className="space-x-2">
          <span>Do you use Tobacco?</span>
          <label htmlFor="yes_tobacco">Yes</label>
          <input type="radio" name="tobacco" id="yes_tobacco" />
          <label htmlFor="no_tobacco">No</label>
          <input type="radio" name="tobacco" id="no_tobacco" />
        </div>
        <div className="space-x-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-600 active:bg-blue-700"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-gray-500 text-white px-3 py-1 hover:bg-gray-600 active:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

const Quotes = () => {
  const quotes: QuoteParams[] = [
    { title: "Bronze Direct", deductible: "$5,000", price: "$300" },
    {
      title: "Gold Direct",
      deductible: "$5,000",
      price: "$400",
      popular: true,
    },
    { title: "Platinum Direct", deductible: "$5,000", price: "$500" },
    { title: "Bronze HSA Direct", deductible: "$2,000", price: "$350" },
  ]
  return (
    <div>
      <h1 className="text-4xl mt-4">Your Quotes</h1>
      <div className="space-y-2 mt-4">
        {quotes.map((quote) => (
          <Quote key={quote.title} {...quote} />
        ))}
      </div>
    </div>
  )
}

type QuoteParams = {
  title: string
  price: string
  deductible: string
  popular?: boolean
}
const Quote = ({ title, price, deductible, popular }: QuoteParams) => {
  const history = useHistory()
  return (
    <div className="border-2 border-gray-200 p-4 flex justify-between">
      <div>
        <p className="text-xl">{title}</p>
        <p>Deductible: {deductible}</p>
        <p>Price: {price}/mo</p>
        <button
          onClick={() => {
            event({
              action: "select-quote",
              category: "quote",
              label: "Select Quote",
            })
            // history.push("/login")
          }}
          className="mt-2 bg-green-500 text-white px-4 py-2 hover:bg-green-600 active:bg-green-700"
        >
          Select
        </button>
      </div>
      <div>
        {popular && (
          <span className="bg-green-500 text-white px-4 py-2">Popular</span>
        )}
      </div>
    </div>
  )
}
