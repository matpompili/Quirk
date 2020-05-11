// Copyright 2020 Matteo Pompili.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Gate} from "src/circuit/Gate.js"
import {Matrix} from "src/math/Matrix.js"

let VariousRotations = {};

VariousRotations.X90 = Gate.fromKnownMatrix(
    "X90",
    Matrix.fromAngleAxisPhaseRotation(Math.PI / 2, [1,0,0], 0),
    "X90 Gate",
    "Rotation around X by 90 degrees.");

VariousRotations.mX90 = Gate.fromKnownMatrix(
    "-X90",
    Matrix.fromAngleAxisPhaseRotation(-Math.PI / 2, [1,0,0], 0),
    "-X90 Gate",
    "Rotation around X by -90 degrees.");

VariousRotations.Y90 = Gate.fromKnownMatrix(
    "Y90",
    Matrix.fromAngleAxisPhaseRotation(Math.PI / 2, [0,1,0], 0),
    "Y90 Gate",
    "Rotation around Y by 90 degrees.");

VariousRotations.mY90 = Gate.fromKnownMatrix(
    "-Y90",
    Matrix.fromAngleAxisPhaseRotation(-Math.PI / 2, [0,1,0], 0),
    "-Y90 Gate",
    "Rotation around Y by -90 degrees.");

VariousRotations.Z90 = Gate.fromKnownMatrix(
    "Z90",
    Matrix.fromAngleAxisPhaseRotation(Math.PI / 2, [0,0,1], 0),
    "Z90 Gate",
    "Rotation around Z by 90 degrees.");

VariousRotations.mZ90 = Gate.fromKnownMatrix(
    "-Z90",
    Matrix.fromAngleAxisPhaseRotation(-Math.PI / 2, [0,0,1], 0),
    "-Z90 Gate",
    "Rotation around Z by -90 degrees.");

VariousRotations.X180 = Gate.fromKnownMatrix(
    "X180",
    Matrix.fromAngleAxisPhaseRotation(Math.PI, [1,0,0], 0),
    "X180 Gate",
    "Rotation around X by 180 degrees.");

VariousRotations.Y180 = Gate.fromKnownMatrix(
    "Y180",
    Matrix.fromAngleAxisPhaseRotation(Math.PI, [0,1,0], 0),
    "Y180 Gate",
    "Rotation around Y by 180 degrees.");

VariousRotations.Z180 = Gate.fromKnownMatrix(
    "Z180",
    Matrix.fromAngleAxisPhaseRotation(Math.PI, [0,0,1], 0),
    "Z180 Gate",
    "Rotation around Z by 180 degrees.");

VariousRotations.all =[
    VariousRotations.X90,
    VariousRotations.mX90,
    VariousRotations.Y90,
    VariousRotations.mY90,
    VariousRotations.Z90,
    VariousRotations.mZ90,
    VariousRotations.X180,
    VariousRotations.Y180,
    VariousRotations.Z180,
];

export {VariousRotations}
