import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class FileUpload extends Component {
    constructor() {
        super()
        this.state = { files: [] }
    }

    onDrop(files) {
        this.setState({
            files
        });
    }
    render() {
        return (
            <section>
                <div className="dropzone">
                    <Dropzone onDrop={this.onDrop.bind(this)}>
                        <p>Try dropping some files here, or click to select files to upload.</p>
                    </Dropzone>
                </div>
                <aside>
                    <h2>Dropped files</h2>
                    <ul>
                        {
                            this.state.files.map(f => <div>
                                <li>{f.name} - {f.size} bytes</li>
                                <img src={f.preview} alt={f.name} />
                            </div>
                            )
                        }
                    </ul>
                </aside>
            </section>
        )
    }
}

export default FileUpload;