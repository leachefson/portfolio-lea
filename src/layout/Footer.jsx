import { Footer } from "flowbite-react";
import { Facebook } from "react-bootstrap-icons";
import {Instagram} from "react-bootstrap-icons";
import {Twitter} from "react-bootstrap-icons";
import {Github} from "react-bootstrap-icons";


export default () =>{
    return(

<Footer container={true} className="bg-purple-400">
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <Footer.Brand
        href="https://flowbite.com"
        src="https://flowbite.com/docs/images/logo.svg"
        alt="Flowbite Logo"
        name="Flowbite"
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <div className="my-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon
          href="#"
          icon={Facebook}
        />
        <Footer.Icon
          href="#"
          icon={Instagram}
        />
        <Footer.Icon
          href="#"
          icon={Twitter}
        />
        <Footer.Icon
          href="#"
          icon={Github}
        />
      </div>
    <Footer.Copyright
      href="#"
      by="Flowbite™"
      year={2022}
    />
  </div>
</Footer>
    )
}