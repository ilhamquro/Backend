import Package from "../models/PackageModel.js";
import path from "path";

export const getPackages = async(req, res)=>{
    try {
        const response = await Package.findAll();
        res.json(response);
    }   catch (error) {
        console.log(error.message);
    }
}

export const getPackageById = async(req, res)=>{
    try {
        const response = await Package.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(response);
    }   catch (error) {
        console.log(error.message);
    }
}

export const savePackage = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "Nothing Uploaded"});
    const name = req.body.title;
    const desc = req.body.desc;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({
        msg:"Invalid Extension File"
    });

    if(fileSize > 5000000) return res.status(422).json({
        msg:"Image Must Be Less Than 5 Mb"
    });

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Package.create({name: name, image: fileName, url: url, desc: desc});
            res.status(201).json({msg: "Package Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const updatePackage = (req, res)=>{

}

export const deletePackage = (req, res)=>{

}