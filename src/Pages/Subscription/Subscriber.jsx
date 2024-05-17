/* eslint-disable react/prop-types */

import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Subscriber = ({ show }) => {
  return (
    <div className={`${show === "Subscriber" ? "" : "hidden"} mx-8`}>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Subscription</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td className="text-[16px] font-semibold">Free</td>
              <td>
                <div className="flex items-center">
                  <MdVisibility size={18} className="text-green-500 mr-2" />
                  <span className="text-green-500">Active</span>
                </div>
              </td>
              <th>
                <button className="btn btn-ghost btn-sm">Upgrade</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-sm">Downgrade</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>

              <td className="text-[16px] font-semibold">Business</td>
              <td>
                <div className="flex items-center">
                  <MdVisibility size={18} className="text-green-500 mr-2" />
                  <span className="text-green-500">Active</span>
                </div>
              </td>
              <th>
                <button className="btn btn-ghost btn-sm">Upgrade</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-sm">Downgrade</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>

              <td className="text-[16px] font-semibold">Free</td>
              <td>
                <div className="flex items-center">
                  <MdVisibilityOff size={18} className="text-red-500 mr-2" />
                  <span className="text-red-500">Inactive</span>
                </div>
              </td>
              <th>
                <button className="btn btn-ghost btn-sm">Upgrade</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-sm">Downgrade</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>

              <td className="text-[16px] font-semibold">Pro</td>
              <td>
                <div className="flex items-center">
                  <MdVisibility size={18} className="text-green-500 mr-2" />
                  <span className="text-green-500">Active</span>
                </div>
              </td>
              <th>
                <button className="btn btn-ghost btn-sm">Upgrade</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-sm">Downgrade</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriber;
