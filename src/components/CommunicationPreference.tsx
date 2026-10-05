"use client";

import { useId, useState } from "react";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  includePhone?: boolean;
};

export default function CommunicationPreference({ value, onChange, includePhone = false }: Props) {
  const id = useId();
  const [selection, setSelection] = useState("");
  const preference = value ?? selection;
  const needsPhone = preference === "Text" || preference === "Phone";
  const fieldClass = "w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] bg-white";

  return (
    <>
      <div>
        <label htmlFor={`${id}-preference`} className="block text-sm font-medium text-stone-700 mb-1">
          Preferred method of communication *
        </label>
        <select
          id={`${id}-preference`}
          name="Preferred method of communication"
          required
          value={preference}
          onChange={(event) => {
            setSelection(event.target.value);
            onChange?.(event.target.value);
          }}
          className={fieldClass}
        >
          <option value="" disabled>Select an option</option>
          <option value="Text">Text</option>
          <option value="Phone">Phone</option>
          <option value="Email">Email</option>
        </select>
      </div>
      {includePhone && (
        <div>
          <label htmlFor={`${id}-phone`} className="block text-sm font-medium text-stone-700 mb-1">
            Phone{needsPhone ? " *" : " (optional)"}
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            name="phone"
            autoComplete="tel"
            required={needsPhone}
            className={fieldClass}
          />
        </div>
      )}
    </>
  );
}
