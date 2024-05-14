import { Box, Typography } from "@mui/material";
import "../Subscription/Subscription.css";

function Subscription() {
  return (
    <Box className="bg-[#1b1b1b]">
      <Box className="flex justify-around text-[#FF0000] py-4 ">
        <img className="subsImage" src="./assets/logo/Gaana_logo.png" />
        <button>Log In / Sign Up</button>
      </Box>
      <Box className="px-[20%]">
        <Box className="text-white text-center p-5">
          <h4>
            Get <span className="text-[#FF0000]">Gaana Plus</span> to listen
            ad-free, offline, high quality music & much more!
          </h4>
        </Box>

        <Box className="text-white flex justify-center content-center gap-x-6 text-center text-xs ">
          <Box>
            <img className="icon-img" src="./assets/icons/icon1.svg" />
            <p className="pt-2">Ads-Free Music</p>
          </Box>
          <Box>
            <img className="icon-img" src="./assets/icons/icon2.svg" />
            <p className="pt-2">Listen Offline</p>
          </Box>
          <Box>
            <img className="icon-img" src="./assets/icons/icon3.svg" />
            <p className="pt-2">HD Quality</p>
          </Box>

          <Box>
            <img className="icon-img" src="./assets/icons/icon4.svg" />
            <p className="pt-2">Android Auto App</p>
          </Box>
          <Box>
            <img className="icon-img" src="./assets/icons/icon5.svg" />
            <p className="pt-2">Unlimited Skips</p>
          </Box>
        </Box>

        <Box className="text-white grid gap-4 grid-cols-1 mt-4">
          <Box className="p-3 bg-gray-500 flex justify-between rounded-md">
            <h5>1 Month Gaana Plus</h5>
            <h5>Rs. 99</h5>
          </Box>
          <Box className="p-3 bg-gray-500 flex justify-between rounded-md">
            <h5>1 Year Gaana Plus</h5>
            <h5>Rs. 299</h5>
          </Box>
          <Box className="p-3 bg-gray-500 flex justify-between rounded-md">
            <h5>
              1 Month Gaana Plus Trial <span>Best Vale</span>
            </h5>
            <h5>Rs. 1</h5>
          </Box>
        </Box>
        <Box className="flex flex-col py-4 text-white">
          <button className=" m-auto rounded-full py-2 bg-[#FF0000]  px-8">
            Login to Subscribe
          </button>
          <p className="m-auto py-2">
            Cancel anytime! Check FAQ'S for more info.
          </p>
        </Box>
      </Box>
      <Box className="mx-[15%] text-white shadow-xl rounded-lg">
        <Box className="">
          <Box className="flex flex-col pb-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              FAQ
            </h2>
          </Box>
          <Box className="mx-auto grid px-1 Boxide-y Boxide-neutral-200">
            <Box className="py-2">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <h4> What is Gaana Plus?</h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Gaana Plus is the Premium version of Gaana which allows you to
                  enjoy the premium benefits like Streaming Ads Free Music,
                  Unlimited Downloads, Exclusive content, and much more!
                </p>
              </details>
            </Box>
            <hr />
            <Box className="py-2">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <h4> Refund Policy</h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We would like to inform you that subscription
                  purchases/renewals are not refundable. Once you cancel the
                  renewal, you can still enjoy your subscription benefits for
                  the rest of your billing cycle. Please refer to the terms:
                  https://gaana.com/terms_and_conditions.html For every renewal,
                  we send an intimation over email or number so that you can
                  cancel the renewal before the deduction happens.
                </p>
              </details>
            </Box>
            <hr />
            <Box className="py-2">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <h4> Cancel Subscription</h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  You can switch off auto-renewal anytime while you are on an
                  active subscription. Simply log in to the Gaana app, go to
                  settings, select Profile, then navigate to the subscription
                  page and toggle off auto-renewal. Alternatively, you can visit
                  http://www.gaana.com/myzone on the Gaana website. Please note
                  that steps may vary slightly based on updates to the Gaana app
                  and website.
                </p>
              </details>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Subscription;
