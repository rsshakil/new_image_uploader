<?php

namespace App\Http\Requests\BACKEDN\IMG;

use App\Exceptions\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class ImageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'image_url' => 'required',
        ];
    }
    /**
     * @param Validator $validator
     * @throws ValidationException
     */
    // protected function failedValidation(Validator $validator)
    // {
    //     throw new ValidationException($validator);
    // }
}
