import React from 'react'
import { useState } from 'react'

export default function EditTicketForm(props) {
  const { ticketToEdit, setRaisedTickets, raisedTickets } = props
  const [issueTitle, setIssueTitle] = useState(ticketToEdit.issueTitle)
  const [issueDescription, setIssueDescription] = useState(
    ticketToEdit.issueDescription
  )
  const [issueType, setIssueType] = useState(ticketToEdit.issueType)
  const [priority, setPriority] = useState(ticketToEdit.priority)

  const updateTicketLocally = (tickets, updatedTicket) => {
    return tickets.map((ticket) =>
      ticket.ticketId === updatedTicket.ticketId ? updatedTicket : ticket
    )
  }

  const handleEditTicket = () => {
    const editedTicket = {
      ...ticketToEdit,
      issueTitle,
      issueDescription,
      issueType,
      priority,
    }
    const ticketId = ticketToEdit.ticketId
    props.updateTicket('tickets', ticketId, editedTicket)

    props.setOpenEditTicket(false)
  }

  return (
    <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-6">
      <div className="px-4 py-5 sm:px-6 border-b">
        <div className="mt-4">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Edit Ticket
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Make changes to the ticket below and save.
          </p>
        </div>
      </div>
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Issue Title
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setIssueTitle(e.target.value)}
                value={issueTitle}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Issue Description
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setIssueDescription(e.target.value)}
                value={issueDescription}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Service Needed
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                onChange={(e) => setIssueType(e.target.value)}
                value={issueType}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="">Please select a Service</option>
                <option value="Cyber Security Consulting">
                  Cyber Security Consulting
                </option>
                <option value="Compliance Security Program">
                  Compliance Security Program
                </option>
                <option value=">Cyber Awareness Education">
                  Cyber Awareness Education
                </option>
                <option value="Cloud Access Security Broker (CASB)">
                  Cloud Access Security Broker (CASB)
                </option>
                <option value="Digital Forensics & Dark Web">
                  Digital Forensics & Dark Web
                </option>
                <option value="Data Loss Prevention (DLP)">
                  Data Loss Prevention (DLP)
                </option>
                <option value="Incident Response & Ransom Payment">
                  Incident Response & Ransom Payment
                </option>
                <option value="Managed Security Services">
                  Managed Security Services
                </option>
                <option value="Managed Detection & Response (MDR)">
                  Managed Detection & Response (MDR)
                </option>
                <option value="Penetration Testing">Penetration Testing</option>
                <option value="Security Assessment & Audit">
                  Security Assessment & Audit
                </option>
                <option value="Security Operation Center (SOC)">
                  Security Operation Center (SOC)
                </option>
                <option value="Vulnerability Testing">
                  Vulnerability Testing
                </option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Priority
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button> */}
        <div
          onClick={handleEditTicket}
          className="cursor-pointer rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Save Changes
        </div>
      </div>
    </form>
  )
}
