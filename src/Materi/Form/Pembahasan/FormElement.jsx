import React from "react";

export default class FormElement extends React.Component{
    state={
        nama: '',
        jurusan:'',
        gender:'',
        alamat:'',
        member: false
    }
    handleSubmit= (e) =>{
        e.preventDefault();

        alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        member: ${this.state.member ? 'Yes' : 'No'}`);

        this.setState({
            nama: '',
            jurusan:'',
            gender:'',
            alamat:'',
            member: false
        })
    }
    render () {
        return (
            <div style={{margin: '50px 50px 50px 50px', border: '1px solid blue', padding: '20px 20px', background: 'lightblue', textAlign: 'left' }}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nama : <input type="text" name="nama" placeholder="Masukkan nama" onChange={e => this.setState({nama: e.target.value})} 
                        value={this.state.nama}
                    />
                    </label>
                    <br /><br />
                    <label>
                        Jurusan : <select name="jurusan" onChange={e => this.setState({jurusan: e.target.value})} value={this.state.jurusan}>
                            <option value="">Pilih Jurusan</option>
                            <option value="Teknik Elektro">Teknik Elektro</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Teknik Mesin">Teknik Mesin</option>
                            <option value="Teknik Perkapalan">Teknik Perkapalan</option>
                            <option value="Teknik Pertambangan">Teknik Pertambangan</option>
                            <option value="Teknik Lingkungan">Teknik Lingkungan</option>
                        </select>
                    </label>
                    <br /><br />
                    <label>
                        Jenis Kelamin : 
                        <input type="radio" name="gender" onChange={e => this.setState({gender: e.target.value})} value="Laki-Laki"/>Laki - Laki
                        <input type="radio" name="gender" onChange={e => this.setState({gender: e.target.value})} value="Perempuan"/>Perempuan
                    </label>
                    <br /><br /> 
                    <label>
                        Alamat :
                        <textarea cols="50" rows="3" name="alamat" placeholder="Masukkan alamat lengkap" onChange={e => this.setState({alamat: e.target.value})} value={this.state.alamat}></textarea>
                    </label>
                    <br /><br />
                    <label>
                        Member <input type="checkbox" checked={this.state.member} name="member" onChange={e => this.setState({member: e.target.checked})}/>
                    </label>
                    <br /><br /><br />
                    <button type="submit" name="submit">Submit</button>
                </form>
            </div>
        )
    }
}