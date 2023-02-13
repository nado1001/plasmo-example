import { SubmitHandler, useForm } from "react-hook-form"

import { useStorage } from "@plasmohq/storage/hook"

function OptionsIndex() {
  const [name, setName] = useStorage("name")

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{ name: string }>()

  const onSubmit: SubmitHandler<{ name: string }> = (data) => {
    setName(data.name)
  }

  return (
    <div>
      <h1>This is the Option UI page!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            {...register("name", {
              required: "This is required"
            })}
            defaultValue={name}
            style={{
              border: errors.name ? "1px solid red" : "1px solid black"
            }}
          />
        </label>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <button
          type="submit"
          style={{
            marginTop: "20px",
            display: "block"
          }}>
          Save
        </button>
      </form>
    </div>
  )
}

export default OptionsIndex
