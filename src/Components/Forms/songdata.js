import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { ErrorMessage, useFormik } from 'formik'

const validate = (values) => {
    const errors = {};
    if (!values.songName) {
        errors.songName = "Required";
    } else if (values.songName.length > 150) {
        errors.songName = "Song title too long";
    }
    if (!values.songAuthor) {
        errors.songAuthor = "Required";
    } else if (values.songAuthor.length > 50) {
        errors.songAuthor = "Author name too long";
    }
    if (!values.songGenre) {
        errors.songGenre = "Required";
    } else if (values.songGenre.length > 50) {
        errors.songGenre = "Music genre too long";
    }
    if (!values.songLength) {
        errors.songLength = "Required";
    } else if (!/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/i.test(values.songLength)) {
        errors.songLength = "Invalid format for song duration"
    }
    return errors;
};

const SongForm = () => {

    const formik = useFormik({
        initialValues: {
            songName: "",
            songAuthor: "",
            songGenre: "",
            songLength: ""
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formSongName">
          <Form.Label>Song Title</Form.Label>
          <Form.Control
            id="songName"
            name="songName"
            type="text"
            placeholder="Enter song title..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.songName}
            isInvalid={!!formik.errors.songName}
          />
        {formik.touched.songName && formik.errors.songName ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.songName}
            </Form.Control.Feedback>
          ) : null}
        </Form.Group>

        <Form.Group controlId="formSongAuthor">
          <Form.Label>Song Artist</Form.Label>
          <Form.Control
            id="songAuthor"
            name="songAuthor"
            type="text"
            placeholder="Enter song artist..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.songAuthor}
            isInvalid={!!formik.errors.songAuthor}
          />
        {formik.touched.songAuthor && formik.errors.songAuthor ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.songAuthor}
            </Form.Control.Feedback>
          ) : null}
        </Form.Group>

        <Form.Group controlId="formSongGenre">
          <Form.Label>Music Genre</Form.Label>
          <Form.Control
            id="songGenre"
            name="songGenre"
            type="text"
            placeholder="Enter song genre..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.songGenre}
            isInvalid={!!formik.errors.songGenre}
          />
        {formik.touched.songGenre && formik.errors.songGenre ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.songGenre}
            </Form.Control.Feedback>
          ) : null}
        </Form.Group>

        <Form.Group controlId="formSongLength">
          <Form.Label>Song Duration</Form.Label>
          <Form.Control
            id="songLength"
            name="songLength"
            type="clock"
            placeholder="00:00"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.songLength}
            isInvalid={!!formik.errors.songLength}
          />
        {formik.touched.songLength && formik.errors.songLength ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.songLength}
            </Form.Control.Feedback>
          ) : null}
        </Form.Group>

        <Button type="submit" variant="dark">
          Agregar
        </Button>
      </Form>
    );
}

export default SongForm