import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import { Alert } from "./Alert";

class PostForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
    };
  }

  handlerSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;

    if (!title.trim() || !description.trim()) {
      this.props.showAlert("Fields will not be empty!", "danger", 3000);
      return;
    }

    const newPost = {
      id: Date.now().toString(),
      title,
      description,
    };
    this.setState({ title: "", description: "" });
    this.props.createPost(newPost);
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };
  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        {this.props.alert && <Alert alert={this.props.alert} />}
        <div className="row">
          <div className="form-group col-4">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              value={this.state.title}
              name="title"
              onChange={this.changeInputHandler}
            />
          </div>
          <div className="form-group col-8">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
              value={this.state.description}
              name="description"
              onChange={this.changeInputHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.app.alert,
  };
};

const mapDispatchToProps = {
  createPost,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
